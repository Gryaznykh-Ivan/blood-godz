export const Types = {
    regular: {
        body: "bg-gradient-to-r from-gray-700 to-gray-800",
        child: "bg-gray-600 border-2 border-gray-500"
    },
    negative: {
        body: "bg-gradient-to-r from-red-800 to-gray-800",
        child: "bg-red-400 border-2 border-red-300"
    },
    positive: {
        body: "bg-gradient-to-r from-purpur to-gray-800",
        child: "bg-green-300 border-2 border-green-200"
    }
}

export type TypesOfTypes = keyof typeof Types
