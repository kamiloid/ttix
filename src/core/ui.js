/*jshint esversion:8*/

module.exports =
    {
        Frames:{
            TYPE: { NONE: 0, LINE: 1, DOUBLE_LINE: 2, SOLID: 3, OPAQUE: 3, SEMITRANS: 4 },
            STYLES: {
                LEFT: [" ", "│", "║", "█", "▒", "░"],
                RIGHT: [" ", "│", "║", "█", "▒", "░"],
                TOP: [" ", "─", "═", "▄", "▒", "░"],
                BOTTOM: [" ", "─", "═", "▀", "▒", "░"],
                CORNER_TOP_LEFT: [" ", "┌", "╔", "▄", "▒", "░"],
                CORNER_TOP_RIGHT: [" ", "┐", "╗", "▄", "▒", "░"],
                CORNER_BOTTOM_LEFT: [" ", "└", "╚", "▀", "▒", "░"],
                CORNER_BOTTOM_RIGHT: [" ", "┘", "╝", "▀", "▒", "░"]
            }
        },
        Icos:{
            ARROWS: { 
                DOUBLE_R: "»", 
                DOUBLE_L: "«",
                HAND_R: "☛",
                HAND_L: "☚",
                ROUNDED_R: "➜",
                ARCHED_R: "➤",
                CURVED_R: "⤳",
                CURVED_L: "⬿",
                SEMI_R: "⇀",
                SEMI_L: "↼",
                ZIGZAG_R: "⟿",
                ZIGZAG_L: "⬳",
                CYCLED_R: "↻",
                CYCLED_L: "↺",
                ANGLED_R: "❱",
                ANGLED_L: "❰",
                DOUBLE: "⟷",
                TAILED_R: "➼",
                SQUARED_R: "⍄",
                SQUARED_L: "⍃"
            },
            EMOJIS: {
                SMILE: "😀"
            },
            INPUTS: {
                CHECKED: "✓",
                CROSSED: "☒",
                CROSSED_BOLD: "✖",
                CROSSED_LIGHT: "𐄂",
                RADIO_CHECKED: "◉",
                RADIO: "◯",
                CIRCLED_ADD: "⊕",
                CIRCLED_REMOVE: "⊝",
                CHECKBOX_EMPTY: "⧠",
                CHECKBOX_CHECKED: "■",
                CHECKBOX_DOTTED: "⊡"
            },
            SYMBOLS: {
                SEARCH: "⌕",
                EDIT: "✎"
            },
            BRACKETS: {
                LENTICULAR_L: "【",
                LENTICULAR_R: "】",
                DOUBLE_ANGLE_L: "《",
                DOUBLE_ANGLE_R: "》"
            }
        }
    };
