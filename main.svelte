<script>
export let InputWrapperValue = '';
export let OLSKLocalized = null;

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function InputWrapperDispatchClear() {
	dispatch('InputWrapperDispatchClear');
}

import _OLSKInputClear from '../OLSKUIAssets/_OLSKInputClear.svg';
</script>

<div class="OLSKInputWrapperContainer OLSKToolbarFlexible">

<slot></slot>

{#if InputWrapperValue}
	<button class="OLSKInputWrapperClearButton OLSKLayoutElementTappable OLSKLayoutButtonNoStyle" title={ OLSKLocalized('OLSKInputWrapperClearButtonText') } on:click={ InputWrapperDispatchClear }>
		<div class="OLSKInputWrapperClearButtonImage">{@html _OLSKInputClear }</div>
	</button>
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
