export class Room {
    user1: string;
    user2: string;
    warning?: string;
    id?:string;
    constructor(user1:string, user2:string, warning?:string) {
        this.user1 = user1;
        this.user2 = user2;
        this.warning = warning;
    }
}
