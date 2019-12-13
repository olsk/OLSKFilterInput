<script>
export let StubInputWrapperValue = '';

import Module from './main.svelte';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function InputWrapperDispatchClear() {
	dispatch('InputWrapperDispatchClear');
}
</script>

<Module InputWrapperValue={ StubInputWrapperValue } on:InputWrapperDispatchClear={ InputWrapperDispatchClear }>
	<input bind:value={ StubInputWrapperValue }>
</Module>
