(function($, undefined) {
  $(document).ready(function(){
    module('nesterSortable export methods');

    /**
     *  Basic tree:
     *   - First item
     *   - Second item
     *     - Second item | first sub-item
     *     - Second item | second sub-item
     *       - Second sub-item | first sub-item
     *   - Third item
     */

    test('Try to export a basic tree with "toArray"', function() {
      var tree = $('#simple_tree').nestedSortable();
      var tree_array = tree.nestedSortable('toArray');

      strictEqual(tree_array.length, 6 + 1, '7 items are returned: the "virtual root" and the six real items.');

      // @TODO: use more meaningfull IDs for items (and a more flexible way to
      // retrieve them than with regexp...)

      deepEqual(tree_array[0], {
        item_id: 'root',
        parent_id: 'none',
        depth: 0,
        left: 1,
        right: 14 // (6 + 1) * 2
      }, 'The virtual root item is well defined, and returned in first.');

      deepEqual(tree_array[1], {
        item_id: '1',
        parent_id: 'root',
        depth: 1,
        left: 2,
        right: 3
      }, 'The "First item" is well defined, and returned in 2nd position.');
      deepEqual(tree_array[2], {
        item_id: '2',
        parent_id: 'root',
        depth: 1,
        left: 4,
        right: 11
      }, 'The "Second item" is well defined, and returned in 3rd position.');
      deepEqual(tree_array[3], {
        item_id: '1',
        parent_id: '2',
        depth: 2,
        left: 5,
        right: 6
      }, 'The "Second item | first sub-item" is well defined, and returned in 4th position.');
      deepEqual(tree_array[4], {
        item_id: '2',
        parent_id: '2',
        depth: 2,
        left: 7,
        right: 10
      }, 'The "Second item | second sub-item" is well defined, and returned in 5th position.');
      deepEqual(tree_array[5], {
        item_id: '1',
        parent_id: '2',
        depth: 3,
        left: 8,
        right: 9
      }, 'The "Second sub-item | first sub-item" is well defined, and returned in 6th position.');
      deepEqual(tree_array[6], {
        item_id: '3',
        parent_id: 'root',
        depth: 1,
        left: 12,
        right: 13
      }, 'The "Third item" is well defined, and returned in last.');
    });

    test('Try to export a tree with multiple roots with "toArray"', function() {
      ok(false, "this test fails");
    });
  });
})(jQuery);
