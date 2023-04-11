//#region IMPORT
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from '@ckeditor/ckeditor5-basic-styles';
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font';
import {
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  PictureEditing,
} from '@ckeditor/ckeditor5-image';
import ImageInsertViaUrl from '@ckeditor/ckeditor5-image/src/imageinsertviaurl';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import {
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
} from '@ckeditor/ckeditor5-table';
import { WordCount } from '@ckeditor/ckeditor5-word-count';

import { REDUCED_MATERIAL_COLORS } from './color';

//#endregion

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Alignment,
  Autoformat,
  Bold,
  Essentials,
  FindAndReplace,
  // FileUploader,
  FontBackgroundColor,
  FontColor,
  Image,
  ImageCaption,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  Indent,
  Indent,
  Italic,
  Link,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PictureEditing,
  RemoveFormat,
  Strikethrough,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  Underline,
  WordCount,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'alignment',
      'outdent',
      'indent',
      '|',
      'insertTable',
      'insertImage',
      'link',
      'mediaEmbed',
      '|',
      'removeFormat',
      'findAndReplace',
      '|',
      'undo',
      'redo',
    ],
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  fontColor: {
    columns: 12,
    colors: REDUCED_MATERIAL_COLORS,
  },
  fontBackgroundColor: {
    columns: 12,
    colors: REDUCED_MATERIAL_COLORS,
  },
  link: {
    addTargetToExternalLinks: true,
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:block',
      'imageStyle:alignRight',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      '|',
      'tableProperties',
      'tableCellProperties',
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'vi',
};
