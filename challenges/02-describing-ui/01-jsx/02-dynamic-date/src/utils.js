export function getTodaysDate() {
    const now = new Date();

    // Format components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Return a formatted string
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Example usage:
console.log(getTodaysDate());
