import { type User, type InsertUser, type NewsletterSubscriber, type InsertNewsletterSubscriber } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  subscribeToNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private newsletterSubscribers: Map<string, NewsletterSubscriber>;

  constructor() {
    this.users = new Map();
    this.newsletterSubscribers = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async subscribeToNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = randomUUID();
    const newSubscriber: NewsletterSubscriber = { ...subscriber, id };
    this.newsletterSubscribers.set(id, newSubscriber);
    return newSubscriber;
  }
}

export const storage = new MemStorage();
