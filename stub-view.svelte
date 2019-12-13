<script>
export let StubOLSKInputWrapperValue = '';

import Module from './main.svelte';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function OLSKInputWrapperDispatchClear() {
	dispatch('OLSKInputWrapperDispatchClear');
}
</script>

<Module OLSKInputWrapperValue={ StubOLSKInputWrapperValue } on:OLSKInputWrapperDispatchClear={ OLSKInputWrapperDispatchClear }>
	<input bind:value={ StubOLSKInputWrapperValue }>
</Module>
