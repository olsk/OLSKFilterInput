<script>
export let StubOLSKInputWrapperValue = '';

import Module from './main.svelte';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function InputWrapperDispatchClear() {
	dispatch('InputWrapperDispatchClear');
}
</script>

<Module OLSKInputWrapperValue={ StubOLSKInputWrapperValue } on:InputWrapperDispatchClear={ InputWrapperDispatchClear }>
	<input bind:value={ StubOLSKInputWrapperValue }>
</Module>
