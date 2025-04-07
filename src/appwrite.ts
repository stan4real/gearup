import { Client, ExecutionMethod, Functions } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const FUNCTION_ID = import.meta.env.VITE_APPWRITE_FUNCTION_ID;

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(PROJECT_ID)

const functions = new Functions(client)


export const sendData = async (data:string) => {
    const result = await functions.createExecution(
        FUNCTION_ID, data, false, '/contact', ExecutionMethod.POST
    )
    return JSON.parse(result.responseBody)
}