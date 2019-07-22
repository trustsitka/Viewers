// TODO: A way to add Icons that don't already exist?
// - Register them and add
// - Include SVG Source/Inline?
// - By URL, or own component?

// TODO: `ohif-core` toolbar builder?

// What KINDS of toolbar buttons do we have...
// - One's that dispatch commands
// - One's that set tool's active
// - More custom, like CINE
//    - Built in for one's like this, or custom components?

// Visible?
// Disabled?
// Based on contexts or misc. criteria?
//  -- ACTIVE_ROUTE::VIEWER
//  -- ACTIVE_VIEWPORT::CORNERSTONE
// setToolActive commands should receive the button event that triggered
// so we can do the "bind to this button" magic

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

const definitions = [
  {
    id: 'StackScroll',
    label: 'Stack Scroll',
    icon: 'bars',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'StackScroll' },
  },
  {
    id: 'Pan',
    label: 'Pan',
    icon: 'arrows',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Pan' },
  },
  {
    id: 'Zoom',
    label: 'Zoom',
    icon: 'search-plus',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Zoom' },
  },
  {
    id: 'DrawTools',
    label: 'Draw',
    icon: 'measure-temp',
    buttons: [
      {
        id: 'ArrowAnnotate',
        label: 'Arrow Annotate',
        icon: 'edit',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'ArrowAnnotate' },
      },
      {
        id: 'EllipticalRoi',
        label: 'Ellipse',
        icon: 'circle-o',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'EllipticalRoi' },
      },
      {
        id: 'RectangleRoi',
        label: 'Rectangle',
        icon: 'square-o',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'RectangleRoi' },
      },
      {
        id: 'Length',
        label: 'Length',
        icon: 'measure-temp',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Length' },
      },
      {
        id: 'Angle',
        label: 'Angle',
        icon: 'angle-left',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Angle' },
      },
      {
        id: 'Eraser',
        label: 'Eraser',
        icon: 'square-o',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Eraser' },
      },
      {
        id: 'Clear',
        label: 'Delete All',
        icon: 'trash',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'clearAnnotations',
      },
    ],
  },
  {
    id: 'ViewTools',
    label: 'Viewport',
    icon: 'search-plus',
    buttons: [
      {
        id: 'Magnify',
        label: 'Magnify',
        icon: 'circle',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Magnify' },
      },
      {
        id: 'RotateRight',
        label: 'Rotate Right',
        icon: 'rotate-right',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'rotateViewportCW',
      },
      {
        id: 'FlipH',
        label: 'Flip H',
        icon: 'ellipse-h',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'flipViewportHorizontal',
      },
      {
        id: 'FlipV',
        label: 'Flip V',
        icon: 'ellipse-v',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'flipViewportVertical',
      },
      {
        id: 'Wwwc',
        label: 'Levels',
        icon: 'level',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Wwwc' },
      },
      {
        id: 'Invert',
        label: 'Invert',
        icon: 'adjust',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'invertViewport',
      },
    ],
  },
  {
    id: 'Reset',
    label: 'Reset Viewport',
    icon: 'reset',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'resetViewport',
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
