
import { Schema, models, model, Document } from "mongoose"

export interface IInteraction extends Document {
    user: Schema.Types.ObjectId;
    action: String;
    queston: Schema.Types.ObjectId;
    answer: Schema.Types.ObjectId;
    tags: Schema.Types.ObjectId[];
    createdAt: Date;

}

const InteractionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    action: { type: String, required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    answer: { type: Schema.Types.ObjectId, ref: "Answer" },
    Tags: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
    createdAt: { type: Date, default: Date.now }

});

const Interaction = models.Interaction || model('Interaction', InteractionSchema);

export default Interaction;