<script>
export let InputWrapperValue = '';
export let OLSKLocalized = null;

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function InputWrapperDispatchClear() {
	dispatch('InputWrapperDispatchClear');
}
</script>

<div class="OLSKInputWrapperContainer OLSKToolbarFlexible">

<slot></slot>

{#if InputWrapperValue}
	<button on:click={ InputWrapperDispatchClear } class="OLSKInputWrapperClearButton OLSKLayoutElementTappable OLSKLayoutButtonNoStyle" style="background-image: url('/_shared/__external/OLSKInputWrapper/ui-assets/clear-button.svg')" title={ OLSKLocalized('OLSKInputWrapperClearButtonText') }></button>
{/if}

</div>

<style>
.OLSKInputWrapperContainer {
	/* @ContainerStation:Parent */
	position: relative;

	/* @ContainerFlexbox:Parent */
	display: flex;

	/* ChromeRemoveInputOutline */
	outline: none;
}

.OLSKInputWrapperContainer :global(input) {
	padding: 4px;
	margin: 0;
	border: 1px solid #e6e6e6;
	border-radius: 5px;

	text-indent: 2px;
	line-height: 1.4;

	/* @ContainerFlexbox:Child */
	flex-grow: 1;
}

.OLSKInputWrapperClearButton {
	--OLSKInputWrapperClearButtonSize: 24px;

	width: var(--OLSKInputWrapperClearButtonSize);
	height: var(--OLSKInputWrapperClearButtonSize);

	background-size: cover;

	/* @ContainerStation:Child */
	position: absolute;
	right: 4px;
	top: 50%;
	margin-top: calc(-1 * var(--OLSKInputWrapperClearButtonSize) / 2);
}

@media screen and (max-width: 760px) {

.OLSKInputWrapperContainer :global(input) {
	height: 30px;

	font-size: 14px;

	/* MobileSafariRemoveDefaultInputStyle */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

}

</style>
