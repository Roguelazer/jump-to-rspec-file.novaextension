
exports.activate = function() {
}

exports.deactivate = function() {
}

nova.commands.register("jump-to-rspec-file.open-rspec-file", (editor) => {
    const path = editor?.document?.path;
    if (path === undefined || path === null || path == "") {
        return;
    }
    const relPath = nova.workspace.relativizePath(path);
    if (!relPath.match(/^(app|lib)/)) {
        return;
    }
    const newPath = relPath.replace(/^(app|lib)/, "spec").replace(/\.rb$/, "_spec.rb");
    const rspecPath = nova.path.join(nova.workspace.path, newPath).trim();
    nova.workspace.openFile(rspecPath);
});

