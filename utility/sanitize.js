export default function sanitizeInput(input) {

    if (!input) {
    throw new Error("Input is required. As input was not found, the prompt program is terminating");
    }

    input = input.trim();

    if (input.length > 1000) {
    throw new Error(`Input too large with ${input.length} characters and exceeding by ${input.length - 1000} characters. Please use less than 1000 characters`);
    }

    // removing some dangerous characters
    return input
    .replace(/[<>]/g, "")
    .replace(/[`$]/g, "");
}