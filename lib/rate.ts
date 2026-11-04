
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export async function limitRequest(
    key: string,
    count: number,
    seconds: number,
): Promise<boolean> {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    // Allow local development without Upstash Redis.
    // Production must have Redis configured.
    if (!redisUrl || !redisToken) {
        if (process.env.NODE_ENV === "development") {
            console.warn(
                "[Rate limit] Upstash not configured. " +
                "Skipping rate limiting in development.",
            );
            return true;
        }

        console.error(
            "[Rate limit] Upstash Redis is required in production.",
        );
        return false;
    }

    try {
        const redis = new Redis({
            url: redisUrl,
            token: redisToken,
        });

        const limiter = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(
                count,
                `${seconds} s`,
            ),
            prefix: "sgt-rate",
        });

        const result = await limiter.limit(key);

        return result.success;
    } catch (error) {
        console.error(
            "[Rate limit] Redis error:",
            error instanceof Error
                ? error.message
                : "Unknown error",
        );

        // Fail closed in production.
        return process.env.NODE_ENV === "development";
    }
}
