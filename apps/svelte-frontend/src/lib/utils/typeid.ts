import { TypeID } from 'typeid-js';

export function extractUUID(id: string) {
	// Convert from string to TypeID
	const typeID = TypeID.fromString(id);
	return typeID.getSuffix();
}
