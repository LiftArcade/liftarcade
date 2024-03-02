import type { Unit } from '@liftarcade/exercises-lib';

//Set the generic settings in a store.
export const settings = $state<{
	units: Unit;
}>({
	units: 'lb'
});
