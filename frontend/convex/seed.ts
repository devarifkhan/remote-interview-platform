import { mutation } from "./_generated/server";

export const seedUsers = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query("users").collect();
    if (existing.length > 0) {
      return { message: "Already seeded, skipping." };
    }

    await ctx.db.insert("users", {
      name: "Alice Interviewer",
      email: "alice@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
      role: "interviewer",
      clerkId: "seed_interviewer_001",
    });

    await ctx.db.insert("users", {
      name: "Bob Candidate",
      email: "bob@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
      role: "candidate",
      clerkId: "seed_candidate_001",
    });

    return { message: "Seeded 1 interviewer and 1 candidate." };
  },
});
