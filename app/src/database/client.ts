import { ObjectId } from 'bson';
import mongoose, { Mongoose, Schema } from 'mongoose';

class DatabaseQuery {
  private connection: Mongoose;

  private async conectToDatabase(): Promise<void> {
    this.connection = await mongoose.connect(process.env.DATABASE_URL);
  }

  private async disconectFromDatabase(): Promise<void> {
    await this.connection.disconnect();
  }

  public async model(collection: string) {
    await this.conectToDatabase();

    return this.connection.model(
      collection,
      new Schema({
        _id: ObjectId,
        name: String,
      })
    );
  }
}

export const databaseQuery = new DatabaseQuery();
