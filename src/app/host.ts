export class Host {
    name: string;
    updates: number;
    securityUpdates: number;
    token: string;

    deserialize(input: any) {
        Object.assign(<any>this, input);
    
        return this;
    }
}