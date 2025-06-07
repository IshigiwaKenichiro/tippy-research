import React from 'react';
import ReactDOM from 'react-dom/client';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/translucent.css';

const THEMES = ["default", "light", "translucent", "material"];
function TippyApp() {
    const [themeIdx, setThemeIdx] = React.useState(0);
    const theme = THEMES[themeIdx % THEMES.length];
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div>
                <p>かんたんに文字列を表示</p>
                <Tippy content="Hello" theme={theme}>
                    <button onClick={() => setThemeIdx(themeIdx + 1)}>Change Theme ({theme})</button>
                </Tippy>
            </div>

            <div>
                <p>JSX記法でHTML構造を作成する場合</p>
                <Tippy content={(
                    <div>
                        <p>Tooltip content</p>
                        <p>More content here</p>
                    </div>
                )} theme={theme}>
                    <button onClick={() => setThemeIdx(themeIdx + 1)}>Change Theme ({theme})</button>
                </Tippy>
            </div>
        </div>
    )
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <TippyApp />
    </React.StrictMode>
)