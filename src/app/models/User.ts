export interface User {
    firstName: string,
    lastName: string,
    age: number,
    hide: boolean,
    address: {
        street: string,
        city: string,
        state: string
    },
    img?: string,
    isActive?: boolean,
    balance?: number,
    registered?: any,
    email: string
}