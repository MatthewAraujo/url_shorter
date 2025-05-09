// Error
export class Err<L, R> {
	readonly value: L

	constructor(value: L) {
		this.value = value
	}

	isOk(): this is Ok<L, R> {
		return false
	}

	isErr(): this is Err<L, R> {
		return true
	}
}

// Success
export class Ok<L, R> {
	readonly value: R

	constructor(value: R) {
		this.value = value
	}

	isOk(): this is Ok<L, R> {
		return true
	}

	isErr(): this is Err<L, R> {
		return false
	}
}

export type Either<L, R> = Err<L, R> | Ok<L, R>

export const err = <L, R>(value: L): Either<L, R> => {
	return new Err(value)
}

export const ok = <L, R>(value: R): Either<L, R> => {
	return new Ok(value)
}
