# ChatGPT Export Browser Bookmarklet

The ChatGPT Export bookmarklet is a convenient tool that allows you to effortlessly export conversations with ChatGPT as markdown files. With this bookmarklet, you can capture and save your ChatGPT conversations in a readable format for easy reference and sharing.

## Installation

To get started, simply visit the [ChatGPT to Markdown web page](https://geeksta.net/tools/chatgpt-to-markdown/) and drag the bookmarklet link to your browser's bookmark toolbar. You can also review the source code of the link to ensure its integrity and functionality.

Alternatively, if you prefer a more hands-on approach, you can clone this repository, install the necessary dependencies, and compile the code on your own machine.

## How it works

Once the bookmarklet link is clicked on a ChatGPT conversation page the `document.body` is cloned and modified in the cloned version to remove any unnecessary information, ensuring a clean and concise output. Finally, the resulting HTML code is converted to markdown format and downloaded as a text file. The file is automatically named based on the conversation's title in the ChatGPT interface.

With the ChatGPT Export browser bookmarklet, archiving and sharing your ChatGPT conversations as markdown files becomes a seamless process, enhancing your productivity and collaboration.
