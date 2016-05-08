import Position from "../position";

export abstract class Token {
    private pos: Position;
    private str: string;

    constructor(pos: Position, str: string) {
        this.pos = pos;
        this.str = str;
    }

    public get_str(): string {
        return this.str;
    }

    public get_row(): number {
        return this.pos.get_row();
    }

    public get_col(): number {
        return this.pos.get_col();
    }

    public get_pos(): Position {
        return this.pos;
    }
}