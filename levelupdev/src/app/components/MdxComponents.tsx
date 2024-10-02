import Link from "next/link";
import Image from "next/image";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-bold" {...props}>
      {props.children}
    </h3>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-md font-bold text-blue-400" {...props}>
      {props.children}
    </h4>
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-sm font-bold" {...props}>
      {props.children}
    </h5>
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="text-xs font-bold" {...props}>
      {props.children}
    </h6>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base" {...props}>
      {props.children}
    </p>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-orange-500 text-2xl text-semibold" {...props}>
      {props.children}
    </strong>
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={props.href ?? ""}
      target="_blank"
      className="text-orange-400 dark:text-yellow-400 hover:underline hover:text-orange-400"
      {...props}
    >
      {props.children}
    </Link>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-base" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote className="text-base" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="text-base" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className="p-4 rounded-md my-4 overflow-x-auto !important"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table className="text-base" {...props}>
      <thead>
        <tr>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  ),
  thead: (props: React.HTMLAttributes<HTMLElement>) => (
    <thead className="text-base" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLElement>) => (
    <tbody className="text-base" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="text-base" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-base" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="text-base" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      className="text-base rounded-md object-cover my-4 p-4 mx-auto"
      {...props}
      src={props.src ?? ""}
      alt={props.alt ?? "Image"}
      width={600}
      height={400}
      objectFit="cover"
      priority
    />
  ),
  video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
    <video className="text-base" {...props}>
      <track kind="captions" />
    </video>
  ),
  audio: (props: React.AudioHTMLAttributes<HTMLAudioElement>) => (
    <audio className="text-base" {...props}>
      <track kind="captions" />
    </audio>
  ),
  iframe: (props: React.IframeHTMLAttributes<HTMLIFrameElement>) => (
    <iframe className="text-base" title="Unique Title" {...props} />
  ),
  input: (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input className="text-base" {...props} />
  ),
  label: (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label className="text-base" {...props} htmlFor={props.htmlFor} />
  ),
  button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className="text-base" {...props} />
  ),
  select: (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
    <select className="text-base" {...props} />
  ),
  option: (props: React.OptionHTMLAttributes<HTMLOptionElement>) => (
    <option className="text-base" {...props} />
  ),
  textarea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea className="text-base" {...props} />
  ),
  form: (props: React.FormHTMLAttributes<HTMLFormElement>) => (
    <form className="text-base" {...props} />
  ),
  fieldset: (props: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) => (
    <fieldset className="text-base" {...props} />
  ),
  legend: (props: React.HTMLAttributes<HTMLLegendElement>) => (
    <legend className="text-base" {...props} />
  ),
  summary: (props: React.HTMLAttributes<HTMLElement>) => (
    <summary className="text-base" {...props} />
  ),
  dialog: (props: React.DialogHTMLAttributes<HTMLDialogElement>) => (
    <dialog className="text-base" {...props} />
  ),
  slot: (props: React.SlotHTMLAttributes<HTMLSlotElement>) => (
    <slot className="text-base" {...props} />
  ),
  template: (props: React.HTMLAttributes<HTMLTemplateElement>) => (
    <template className="text-base" {...props} />
  ),
};
