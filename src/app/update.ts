export class Update {
    packageName: string;
    currentVersion: number;
    newVersion: number;
    security: boolean;

    deserialize(input: any) {
        Object.assign(<any>this, input);
    
        return this;
    }
}