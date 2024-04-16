export type Office = {
    id: number,
    name: string,
    online: boolean,
    lines: Line[]
}

type Line = {
    waiting: number,
    elapsed: number
}