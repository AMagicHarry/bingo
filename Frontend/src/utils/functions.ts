export function formatDate(dateString:string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

export function getTimeFromDate(dateString:string) {
    const date = new Date(dateString);
    // Format the date to a time string
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Zero padding for single digit minutes and seconds
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  
    return formattedTime;
  }

export function isBeforeToday(date:string) {
  const createdAtDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return createdAtDate < today;
  }

 export function isAfterToday(date:string) {
  const createdAtDate = new Date(date);
  const today = new Date();
    today.setHours(0, 0, 0, 0);
    return createdAtDate > today;
  }
  
  
  