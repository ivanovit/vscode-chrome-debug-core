<?php

namespace LanguageServer\Protocol\Methods\TextDocument;

use LanguageServer\Protocol\Params;

/**
 * The document save notification is sent from the client to the server when the
 * document was saved in the client.
 */
class DidSaveTextDocumentParams extends Params
{
    /**
     * The document that was closed.
     *
     * @var LanguageServer\Protocol\TextDocumentIdentifier
     */
    public $textDocument;
}