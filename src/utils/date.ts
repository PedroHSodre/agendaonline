import { IScheduleData } from "../types/schedule";

export const formatDateToAmericanDate = (dateString: string) => {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');

    const americanDateString = `${month}-${day}-${year} ${timePart}`;
 
    console.log('americanDateString', americanDateString)
    return americanDateString
}

export const  orderByDate = (items: IScheduleData[], order: 'asc' | 'desc') => {
    items.sort((a, b) => {
      const dateA: Date = new Date(a.data.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
      const dateB: Date = new Date(b.data.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
      return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

    return items;
  }