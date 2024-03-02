/**
 * Basic Date utils.
 *
 * Eventually, look into replacing this, however the complexity of dates is beyond me.
 * Getting into timezones, daylight savings, etc. is a rabbit hole I don't want to go down.
 *
 */

// get the current timezone.
export function getLocalTimeZone() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
