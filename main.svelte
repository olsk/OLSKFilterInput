<script>
export let OLSKInputWrapperValue = '';

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function OLSKInputWrapperDispatchClear() {
	dispatch('OLSKInputWrapperDispatchClear');
}

import _OLSKInputClear from '../OLSKUIAssets/_OLSKInputClear.svg';
</script>

<div class="OLSKInputWrapper OLSKToolbarFlexible">

<slot></slot>

{#if OLSKInputWrapperValue}
	<button class="OLSKInputWrapperClearButton OLSKLayoutElementTappable OLSKLayoutButtonNoStyle OLSKToolbarButton" title={ OLSKLocalized('OLSKInputWrapperClearButtonText') } on:click={ OLSKInputWrapperDispatchClear }>
		<div class="OLSKInputWrapperClearButtonImage">{@html _OLSKInputClear }</div>
	</button>
{/if}

</div>

<style>
.OLSKInputWrapper {
	/* @OLSKInputWrapperStation:Parent */
	position: relative;

	/* @OLSKInputWrapperFlexbox:Parent */
	display: flex;

	/* ChromeRemoveInputOutline */
	outline: none;
}

.OLSKInputWrapper :global(input) {
	padding: 6px;
	margin: 0;
	border: 1px solid #e6e6e6;
	border-radius: 5px;

	text-indent: 2px;
	line-height: 1.4;

	/* @OLSKInputWrapperFlexbox:Child */
	flex-grow: 1;
}

.OLSKInputWrapperClearButton {
	--OLSKInputWrapperClearButtonSize: 24px;

	width: var(--OLSKInputWrapperClearButtonSize);
	height: var(--OLSKInputWrapperClearButtonSize);

	/* @OLSKInputWrapperStation:Child */
	position: absolute;
	right: 4px;
	top: 50%;
	margin-top: calc(-1 * var(--OLSKInputWrapperClearButtonSize) / 2);
}

@media screen and (max-width: 760px) {

.OLSKInputWrapper :global(input) {
	height: 30px;

	font-size: 14px;

	/* MobileSafariRemoveDefaultInputStyle */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

}

</style>
