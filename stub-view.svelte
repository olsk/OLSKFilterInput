<script>
export let TestFilterInputText = '';
export let TestFilterInputPlaceholder = '';

import Module from './main.svelte';
import { OLSKLocalized } from './../../../../_shared/common/global.js'

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function FilterInputDispatchClear() {
	dispatch('FilterInputDispatchClear');
}
</script>

<Module FilterInputText={ TestFilterInputText } FilterInputPlaceholder={ TestFilterInputPlaceholder } OLSKLocalized={ OLSKLocalized } on:FilterInputDispatchClear={ FilterInputDispatchClear } />
