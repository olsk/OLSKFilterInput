<script>
export let StubInputWrapperValue = '';

import Module from './main.svelte';

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function InputWrapperDispatchClear() {
	dispatch('InputWrapperDispatchClear');
}
</script>

<Module InputWrapperValue={ StubInputWrapperValue } OLSKLocalized={ OLSKLocalized } on:InputWrapperDispatchClear={ InputWrapperDispatchClear }>
	<input bind:value={ StubInputWrapperValue }>
</Module>
