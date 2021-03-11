<script>
export let OLSKInputWrapperValue;
export let OLSKInputWrapperDispatchClear;

import { OLSKLocalized } from 'OLSKInternational';

import _OLSKInputClear from '../OLSKUIAssets/_OLSKInputClear.svg';
</script>

<div class="OLSKInputWrapper OLSKToolbarFlexible">

<slot></slot>

{#if OLSKInputWrapperValue}
	<button type="button" class="OLSKInputWrapperClearButton OLSKDecorTappable OLSKDecorButtonNoStyle OLSKToolbarButton" title={ OLSKLocalized('OLSKInputWrapperClearButtonText') } on:mousedown={ (event) => event.preventDefault() } on:click={ OLSKInputWrapperDispatchClear }>
		<div class="OLSKInputWrapperClearButtonImage">{@html _OLSKInputClear }</div>
	</button>
{/if}

</div>

<style>
.OLSKInputWrapper {
	/* OLSKInputWrapperStation:Parent */
	position: relative;

	/* OLSKInputWrapperFlexbox:Parent */
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

	/* OLSKInputWrapperFlexbox:Child */
	flex-grow: 1;
}

.OLSKInputWrapperClearButton {
	--OLSKInputWrapperClearButtonSize: 24px;

	width: var(--OLSKInputWrapperClearButtonSize);
	height: var(--OLSKInputWrapperClearButtonSize);

	/* OLSKInputWrapperStation:Child */
	position: absolute;
	right: 4px;
	top: 50%;
	margin-top: calc(-1 * var(--OLSKInputWrapperClearButtonSize) / 2);
}

@media screen and (max-width: 760px) {

.OLSKInputWrapperClearButton {
	--OLSKInputWrapperClearButtonSize: 30px;
}

.OLSKInputWrapper :global(input) {
	height: 30px;

	font-size: 14px;
}

}

</style>
