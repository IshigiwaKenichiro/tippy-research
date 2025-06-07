import tippy from "tippy.js";
import { KintoneRestAPIClient } from "@kintone/rest-api-client"
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/translucent.css';
import "./sample.css";

declare const kintone: any;
const client = new KintoneRestAPIClient();

kintone.events.on(["app.record.index.show"], async (event) => {

    const $$a = document.querySelector("a.recordlist-show-gaia")!;
    const $$edit = document.querySelector("button.recordlist-edit-gaia")!;
    const $$remove = document.querySelector("button.recordlist-remove-gaia")!;

    tippy($$a, {
        content: `
            <p>ドキュメントレコードの詳細を表示します。</p>
        `,
        allowHTML: true,
    });

    tippy($$edit, {
        content: `
            <p>ドキュメントレコードを編集します。</p>
        `,
        allowHTML: true,
    });
    tippy($$remove, {
        content: `
            <p>ドキュメントレコードを削除します。</p>
        `,
        theme: 'tomato',

        allowHTML: true,
    });
    return event;
});

kintone.events.on(["app.record.detail.show"], async (event) => {

    //文字列一行フィールドにツールチップを出す。
    const $$p = document.createElement('p');
    $$p.innerHTML = 'これはテキストフィールドのツールチップ例です。<br/>文字列一行フィールドにだけ、ツールチップを出すことができます。';
    const $$menu = kintone.app.record.getHeaderMenuSpaceElement();
    $$menu.appendChild($$p);

    const form = await client.app.getFormFields({
        app: kintone.app.getId()
    });

    const fields = Object.values(form.properties).filter(field => field.type === 'SINGLE_LINE_TEXT');

    for (const field of fields) {
        const elem = kintone.app.record.getFieldElement(field.code);

        if (null == elem) continue;

        tippy(elem, {
            content: `
                    <p>                
                    フィールドコード: ${field.code}<br/>フィールド名: ${field.label}
                    </p>
                    <pre>${JSON.stringify(field, null, 2)}</pre>
                `,
            allowHTML: true,
        });

    }


    return event;
});