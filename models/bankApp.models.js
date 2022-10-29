
//simple example of a User schema that has their bank accounts nested

const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    bankAccounts: [BankAccountSchema]
},
{timestamps: true}
)

//nesting bank account transactions within the bank account schema

const TransactionSchema = new mongoose.Schema(
    {
        amount: {type: Number, required: true},
        vender: {type: String, required: true}
    },
    {timestamps: {createdAt: true}}
)

const BankAccountSchema = new mongoose.Schema(
    {
        accountType: {type: String, required: true},
        balance: { type: Number, default: 0},
        transactions: [TransactionSchema]
    },
    {timestamps: true}
)