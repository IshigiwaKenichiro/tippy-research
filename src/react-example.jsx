import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for default styles
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';



function TippyTest({ tippyContent, children }) {

    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            tippy(ref.current, {
                content: tippyContent,
            });
        }
    }, [ref, tippyContent]);

    return (
        <span ref={ref} tabIndex="0">
            {children}
        </span>
    )
}

function TippyTestNotWorking({ tippyContent, children }) {

    return (
        <span data-tippy-content={tippyContent} tabIndex="0">
            {children}
        </span>
    )
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div>
                <p>useEffectを利用して、contentを監視し、tippyコンストラクタを動かした場合は効く</p>
                <TippyTest tippyContent="Hello, I am a tooltip!">
                    <button>
                        Hover over me
                    </button>
                </TippyTest>
            </div>

            <div>
                <p>data-tippy-contentを利用した場合は効かない</p>
                <TippyTestNotWorking tippyContent="This tooltip won't work!">
                    <button>
                        Hover over me too
                    </button>
                </TippyTestNotWorking>
            </div>
        </div>
    </React.StrictMode>
)