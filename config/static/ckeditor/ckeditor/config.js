/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

// CKEDITOR.editorConfig = function( config ) {
// 	// Define changes to default configuration here. For example:
// 	// config.language = 'fr';
// 	// config.uiColor = '#AADC6E';
// };

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    config.language = 'ko';
    config.uiColor = '#F0F0F0';
    config.skin = 'kama';
    config.enterMode = CKEDITOR.ENTER_BR;
    config.shiftEnterMode = CKEDITOR.ENTER_P;
    config.startupFocus = true;
    config.font_defaultLabel = 'Gulim';
    config.font_names = 'Gulim/Gulim;Dotum/Dotum;Batang/Batang;Gungsuh/Gungsuh;Arial/Arial;Tahoma/Tahoma;Verdana/Verdana';
    config.fontSize_defaultLabel = '12px';
    config.htmlEncodeOutput = ture;

    config.toolbar_User = [
            ["Source", "-", "Save", "NewPage", "Preview", "-", "Templates"],
            ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Print", "SpellChecker", "Scayt"],
            ["Undo", "Redo", "-", "Find", "Replace", "-", "SelectAll", "RemoveFormat"],
   ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"],
            '/',
            ["Bold", "Italic", "Underline", "Strike", "-", "Subscript", "Superscript"],
            ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "Blocquote", "CreateDiv"],
            ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"],
            '/',
            ["BidiLtr", "BidiRtl"],
            ["Link", "Unlink", "Anchor"],
            ["Image", "Flash", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"],
            "/",
            ["Styles", "Format", "Font", "FontSize"],
            ["TextColor", "BGColor"],["Maximize", "ShowBlocks", "-", "About"]
        ];

 

    config.filebrowserBrowseUrl = '/Finally_CKEditor/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/Finally_CKEditor/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = '/Finally_CKEditor/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = '/Finally_CKEditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/Finally_CKEditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/Finally_CKEditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';

    config.toolbar = 'User';
};


