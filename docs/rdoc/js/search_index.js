var search_data = {"index":{"searchIndex":["sqlite","checker","dataset","htmlrenderer","multipleexecutionsrunner","testsolutiontypeerror","sqlitemetadatahook","sqlitetesthook","sqliteversionhook","check()","choose_solutions()","command_line()","compare()","compile_file_content()","diff()","diff_class_of()","failed()","framework()","metadata()","new()","new()","parse_dataset()","parse_test()","parse_test_as_datasets_solution()","parse_test_as_query_solution()","post_process_datasets()","post_process_diff()","post_process_file()","render_error()","render_error()","render_success()","render_success()","run()","same_amount()","same_content()","same_header()","same_rows()","split_lines()","split_pipe()","success()","tempfile_extension()","template_file_error()","template_file_success()","readme"],"longSearchIndex":["sqlite","sqlite::checker","sqlite::dataset","sqlite::htmlrenderer","sqlite::multipleexecutionsrunner","sqlite::testsolutiontypeerror","sqlitemetadatahook","sqlitetesthook","sqliteversionhook","sqlite::checker#check()","sqlitetesthook#choose_solutions()","sqlitetesthook#command_line()","sqlite::dataset#compare()","sqlitetesthook#compile_file_content()","sqlitetesthook#diff()","sqlite::htmlrenderer#diff_class_of()","sqlite::checker#failed()","sqlitetesthook#framework()","sqlitemetadatahook#metadata()","sqlite::dataset::new()","sqlite::testsolutiontypeerror::new()","sqlite::htmlrenderer#parse_dataset()","sqlitetesthook#parse_test()","sqlitetesthook#parse_test_as_datasets_solution()","sqlitetesthook#parse_test_as_query_solution()","sqlitetesthook#post_process_datasets()","sqlitetesthook#post_process_diff()","sqlitetesthook#post_process_file()","sqlite::checker#render_error()","sqlite::htmlrenderer#render_error()","sqlite::checker#render_success()","sqlite::htmlrenderer#render_success()","sqlite::multipleexecutionsrunner#run()","sqlite::dataset#same_amount()","sqlite::dataset#same_content()","sqlite::dataset#same_header()","sqlite::dataset#same_rows()","sqlite::dataset#split_lines()","sqlite::dataset#split_pipe()","sqlite::checker#success()","sqlitetesthook#tempfile_extension()","sqlite::htmlrenderer#template_file_error()","sqlite::htmlrenderer#template_file_success()",""],"info":[["Sqlite","","Sqlite.html","",""],["Sqlite::Checker","","Sqlite/Checker.html","",""],["Sqlite::Dataset","","Sqlite/Dataset.html","",""],["Sqlite::HtmlRenderer","","Sqlite/HtmlRenderer.html","",""],["Sqlite::MultipleExecutionsRunner","","Sqlite/MultipleExecutionsRunner.html","",""],["Sqlite::TestSolutionTypeError","","Sqlite/TestSolutionTypeError.html","",""],["SqliteMetadataHook","","SqliteMetadataHook.html","",""],["SqliteTestHook","","SqliteTestHook.html","","<p>This Hook allow to run Sqlite Worker from an ad-hoc program that receives\n.json files.\n"],["SqliteVersionHook","","SqliteVersionHook.html","",""],["check","Sqlite::Checker","Sqlite/Checker.html#method-i-check","(result, solution)","<p>Verify if solution dataset is equals than result when equals: Return passed\n&amp; render success when …\n"],["choose_solutions","SqliteTestHook","SqliteTestHook.html#method-i-choose_solutions","(output_solutions)","<p>If solutions comes in an explicit datasets, it was stored in a instance\nvariable of this class. Instead …\n"],["command_line","SqliteTestHook","SqliteTestHook.html#method-i-command_line","(filename)","<p>Define the command to be run by sqlite worker\n"],["compare","Sqlite::Dataset","Sqlite/Dataset.html#method-i-compare","(other)",""],["compile_file_content","SqliteTestHook","SqliteTestHook.html#method-i-compile_file_content","(request)","<p>Define the .json file template from request structure Input: request = {\n\n<pre>test: (yaml string) teacher&#39;s ...</pre>\n"],["diff","SqliteTestHook","SqliteTestHook.html#method-i-diff","(solutions, results)",""],["diff_class_of","Sqlite::HtmlRenderer","Sqlite/HtmlRenderer.html#method-i-diff_class_of","(value)",""],["failed","Sqlite::Checker","Sqlite/Checker.html#method-i-failed","(name, result, solution, error)",""],["framework","SqliteTestHook","SqliteTestHook.html#method-i-framework","()","<p>Initialize Metatest Framework with Checker &amp; Runner\n"],["metadata","SqliteMetadataHook","SqliteMetadataHook.html#method-i-metadata","()",""],["new","Sqlite::Dataset","Sqlite/Dataset.html#method-c-new","(data)",""],["new","Sqlite::TestSolutionTypeError","Sqlite/TestSolutionTypeError.html#method-c-new","(msg = 'Yaml Test must have solution_type with one of these values: query or datasets')",""],["parse_dataset","Sqlite::HtmlRenderer","Sqlite/HtmlRenderer.html#method-i-parse_dataset","(header, rows)",""],["parse_test","SqliteTestHook","SqliteTestHook.html#method-i-parse_test","(test)","<p>Test should have one of these formats:\n<p>Solution by query: { solution_type: &#39;query&#39;,\n\n<pre>solution_query: ...</pre>\n"],["parse_test_as_datasets_solution","SqliteTestHook","SqliteTestHook.html#method-i-parse_test_as_datasets_solution","(test)","<p>Expected input: OpenStruct#{\n\n<pre>solution_type: &#39;datasets&#39;,\nexamples: [\n  {\n    dataset: &quot;INSERT INTO ...\\nINSERT ...</pre>\n"],["parse_test_as_query_solution","SqliteTestHook","SqliteTestHook.html#method-i-parse_test_as_query_solution","(test)","<p>Expected input: OpenStruct#{\n\n<pre>solution_type: &#39;query&#39;,\nsolution_query: &#39;select * from motores;&#39;,\nexamples: ...</pre>\n"],["post_process_datasets","SqliteTestHook","SqliteTestHook.html#method-i-post_process_datasets","(datasets)","<p>Transforms array datasets into hash with :id &amp; :rows\n"],["post_process_diff","SqliteTestHook","SqliteTestHook.html#method-i-post_process_diff","(data)",""],["post_process_file","SqliteTestHook","SqliteTestHook.html#method-i-post_process_file","(_file, result, status)","<p>Define how output results Expected: {\n\n<pre>&quot;solutions&quot;: [\n    &quot;name\\nTest 1.1\\nTest 1.2\\nTest 1.3\\n&quot;,\n    &quot;name\\nTest ...</pre>\n"],["render_error","Sqlite::Checker","Sqlite/Checker.html#method-i-render_error","(result, solution, error)","<p>Return error page rendered with results &amp; solutions\n"],["render_error","Sqlite::HtmlRenderer","Sqlite/HtmlRenderer.html#method-i-render_error","(result, solution, error)",""],["render_success","Sqlite::Checker","Sqlite/Checker.html#method-i-render_success","(result)","<p>Return success page rendered with results\n"],["render_success","Sqlite::HtmlRenderer","Sqlite/HtmlRenderer.html#method-i-render_success","(result)",""],["run","Sqlite::MultipleExecutionsRunner","Sqlite/MultipleExecutionsRunner.html#method-i-run","(output, example)",""],["same_amount","Sqlite::Dataset","Sqlite/Dataset.html#method-i-same_amount","(other_rows)",""],["same_content","Sqlite::Dataset","Sqlite/Dataset.html#method-i-same_content","(other_rows)",""],["same_header","Sqlite::Dataset","Sqlite/Dataset.html#method-i-same_header","(other_header)",""],["same_rows","Sqlite::Dataset","Sqlite/Dataset.html#method-i-same_rows","(other_rows)",""],["split_lines","Sqlite::Dataset","Sqlite/Dataset.html#method-i-split_lines","(str)",""],["split_pipe","Sqlite::Dataset","Sqlite/Dataset.html#method-i-split_pipe","(line)",""],["success","Sqlite::Checker","Sqlite/Checker.html#method-i-success","(name, result)",""],["tempfile_extension","SqliteTestHook","SqliteTestHook.html#method-i-tempfile_extension","()","<p>Just define file extension\n"],["template_file_error","Sqlite::HtmlRenderer","Sqlite/HtmlRenderer.html#method-i-template_file_error","()",""],["template_file_success","Sqlite::HtmlRenderer","Sqlite/HtmlRenderer.html#method-i-template_file_success","()",""],["README","","README_md.html","","<p><img\nsrc=\"https://travis-ci.org/leandrojdl/mumuki-sqlite-runner.svg?branch=master\">\n<img\nsrc=\"https://codeclimate.com/github/leandrojdl/mumuki-sqlite-runner/badges/gpa.svg\">\n...\n"]]}}