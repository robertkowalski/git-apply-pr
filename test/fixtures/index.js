exports.lgtmInCodeComment = [{
    url: 'https://api.github.com/repos/joyent/sdc-vmapi/pulls/comments/38590213',
    id: 38590213,
    diff_hunk: '@@ -442,10 +442,16 @@ exports.offset_fields_vms_ok = function (t) {\n         t.ok(res.headers[\'x-joyent-resource-count\']);\n         t.ok(body);\n         t.ok(Array.isArray(body));\n-        t.equal(body.length, vmCount - 2);\n-        t.notStrictEqual(body[0].uuid, undefined);\n-        t.notStrictEqual(body[0].alias, undefined);\n-        t.strictEqual(body[0].ram, undefined);\n+        t.equal(body.length, vmCount - 1);\n+        // TOOD: this should not depend on the number of VMs, instead\n+        // we should create a known specific number of VMs as a setup step',
    path: 'test/vms.full.test.js',
    position: null,
    original_position: 31,
    commit_id: '13538da6a115119e89eb042cca3b3bc73f9a60a5',
    original_commit_id: '5df0f1f5a3f27a0b42e05bbbf0b89ae42f4616d6',
    user:
     { login: 'trentm',
       id: 46866,
       avatar_url: 'https://avatars.githubusercontent.com/u/46866?v=3',
       gravatar_id: '',
       url: 'https://api.github.com/users/trentm',
       html_url: 'https://github.com/trentm',
       followers_url: 'https://api.github.com/users/trentm/followers',
       following_url: 'https://api.github.com/users/trentm/following{/other_user}',
       gists_url: 'https://api.github.com/users/trentm/gists{/gist_id}',
       starred_url: 'https://api.github.com/users/trentm/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/trentm/subscriptions',
       organizations_url: 'https://api.github.com/users/trentm/orgs',
       repos_url: 'https://api.github.com/users/trentm/repos',
       events_url: 'https://api.github.com/users/trentm/events{/privacy}',
       received_events_url: 'https://api.github.com/users/trentm/received_events',
       type: 'User',
       site_admin: false },
    body: '"TODO" typo. Otherwise, LGTM.',
    created_at: '2015-09-02T21:58:28Z',
    updated_at: '2015-09-03T14:28:37Z',
    html_url: 'https://github.com/joyent/sdc-vmapi/pull/8#discussion_r38590213',
    pull_request_url: 'https://api.github.com/repos/joyent/sdc-vmapi/pulls/8',
  meta:
  { 'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '59',
    'x-ratelimit-reset': '1450033884',
    etag: '"0fdc8aa87744e06439c5ce8d4eec82b4"',
    status: '200 OK' }
}];

exports.plusOneInIssueComment = [{
    url: 'https://api.github.com/repos/apache/couchdb-fauxton/issues/comments/82947585',
    html_url: 'https://github.com/apache/couchdb-fauxton/pull/321#issuecomment-82947585',
    issue_url: 'https://api.github.com/repos/apache/couchdb-fauxton/issues/321',
    id: 82947585,
    user:
     { login: 'kxepal',
       id: 785983,
       avatar_url: 'https://avatars.githubusercontent.com/u/785983?v=3',
       gravatar_id: '',
       url: 'https://api.github.com/users/kxepal',
       html_url: 'https://github.com/kxepal',
       followers_url: 'https://api.github.com/users/kxepal/followers',
       following_url: 'https://api.github.com/users/kxepal/following{/other_user}',
       gists_url: 'https://api.github.com/users/kxepal/gists{/gist_id}',
       starred_url: 'https://api.github.com/users/kxepal/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/kxepal/subscriptions',
       organizations_url: 'https://api.github.com/users/kxepal/orgs',
       repos_url: 'https://api.github.com/users/kxepal/repos',
       events_url: 'https://api.github.com/users/kxepal/events{/privacy}',
       received_events_url: 'https://api.github.com/users/kxepal/received_events',
       type: 'User',
       site_admin: false },
    created_at: '2015-03-18T12:27:00Z',
    updated_at: '2015-03-18T12:27:00Z',
    body: 'Oh,  this didn\'t happened for me somehow. +1'
  }
];