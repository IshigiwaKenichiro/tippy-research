import tippy from "tippy.js";
import { KintoneRestAPIClient } from "@kintone/rest-api-client"
import "tippy.js/dist/tippy.css";

declare const kintone: any;
const client = new KintoneRestAPIClient();

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

        if (elem) {
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

    }


    return event;
});