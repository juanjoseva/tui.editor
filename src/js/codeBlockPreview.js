import Preview from './preview';

/**
 * Code block preview
 * @class CodeBlockPreview
 * @extends {Preview}
 */
class CodeBlockPreview extends Preview {
    /**
     * Creates an instance of CodeBlockPreview.
     * @param {jQuery} $el - base element
     * @param {EventManager} eventManager - event manager
     * @param {Convertor} convertor - convertor
     * @param {CodeBlockEditor} codeBlockEditor - code block editor
     * @memberof CodeBlockPreview
     */
    constructor($el, eventManager, convertor, codeBlockEditor) {
        super($el, eventManager, convertor, true);

        this._codeBlockEditor = codeBlockEditor;

        this._initEvent();
    }

    _initEvent() {
        this._codeBlockEditor.on('update', () => this.lazyRunner.run('refresh'));
    }

    /**
     * refresh preview
     * @memberof CodeBlockPreview
     * @override
     */
    refresh() {
        const language = this._codeBlockEditor.getLanguage();
        const codeText = this._codeBlockEditor.getEditorCodeText();

        super.refresh(`\`\`\`${language}\n${codeText}\n\`\`\``);
    }

    /**
     * clear preview
     * @memberof CodeBlockPreview
     */
    clear() {
        super.render('');
    }
}

export default CodeBlockPreview;
