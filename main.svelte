<script>
export let FilterInputText = '';
export let FilterInputPlaceholder = '';
export let OLSKLocalized = null;

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function FilterInputDispatchClear() {
	dispatch('FilterInputDispatchClear');
}
</script>

<div class="OLSKFilterInputContainer OLSKToolbarFlexible">

<input bind:value={ FilterInputText } placeholder={ FilterInputPlaceholder || OLSKLocalized('OLSKFilterInputPlaceholderText') } accesskey="f" class="OLSKFilterInput" autofocus />

{#if FilterInputText}
	<button on:click={ FilterInputDispatchClear } class="OLSKFilterInputClearButton OLSKLayoutElementTappable OLSKLayoutButtonNoStyle" style="background-image: url('/_shared/_external/OLSKFilterInput/ui-assets/clear-button.svg')" title={ OLSKLocalized('OLSKFilterInputClearButtonText') }></button>
{/if}

</div>

<style>
.OLSKFilterInputContainer {
	/* @ContainerStation:Parent */
	position: relative;

	/* @ContainerFlexbox:Parent */
	display: flex;

	/* ChromeRemoveInputOutline */
	outline: none;
}

input {
	padding: 4px;
	margin: 0;
	border: 1px solid #e6e6e6;
	border-radius: 5px;

	text-indent: 2px;
	line-height: 1.4;

	/* @ContainerFlexbox:Child */
	flex-grow: 1;
}

.OLSKFilterInputClearButton {
	--OLSKFilterInputClearButtonSize: 24px;

	width: var(--OLSKFilterInputClearButtonSize);
	height: var(--OLSKFilterInputClearButtonSize);

	background-size: cover;

	/* @ContainerStation:Child */
	position: absolute;
	right: 4px;
	top: 50%;
	margin-top: calc(-1 * var(--OLSKFilterInputClearButtonSize) / 2);
}

@media screen and (max-width: 760px) {

input {
	height: 30px;

	font-size: 14px;

	/* MobileSafariRemoveDefaultInputStyle */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

}

</style>
