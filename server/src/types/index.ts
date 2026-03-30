export interface IContact extends Document {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
}
