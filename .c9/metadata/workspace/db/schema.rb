{"filter":false,"title":"schema.rb","tooltip":"/db/schema.rb","undoManager":{"stack":[[{"start":{"row":0,"column":0},"end":{"row":112,"column":0},"action":"remove","lines":["# encoding: UTF-8","# This file is auto-generated from the current state of the database. Instead","# of editing this file, please use the migrations feature of Active Record to","# incrementally modify your database, and then regenerate this schema definition.","#","# Note that this schema.rb definition is the authoritative source for your","# database schema. If you need to create the application database on another","# system, you should be using db:schema:load, not running all the migrations","# from scratch. The latter is a flawed and unsustainable approach (the more migrations","# you'll amass, the slower it'll run and the greater likelihood for issues).","#","# It's strongly recommended that you check this file into your version control system.","","ActiveRecord::Schema.define(version: 20150517115732) do","","  # These are extensions that must be enabled in order to support this database","  enable_extension \"plpgsql\"","","  # These are extensions that must be enabled in order to support this database","  enable_extension \"plpgsql\"","","  create_table \"categories\", force: :cascade do |t|","    t.string   \"name\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  create_table \"companies\", force: :cascade do |t|","    t.integer  \"user_id\"","    t.string   \"name\"","    t.integer  \"location_id\"","    t.string   \"description\"","    t.string   \"web\"","    t.string   \"phone\"","    t.datetime \"created_at\",  null: false","    t.datetime \"updated_at\",  null: false","  end","","  add_index \"companies\", [\"location_id\"], name: \"index_companies_on_location_id\", using: :btree","  add_index \"companies\", [\"user_id\"], name: \"index_companies_on_user_id\", using: :btree","","  create_table \"jobs\", force: :cascade do |t|","    t.integer  \"category_id\"","    t.integer  \"company_id\"","    t.string   \"description\"","    t.integer  \"location_id\"","    t.datetime \"duration\"","    t.datetime \"created_at\",  null: false","    t.datetime \"updated_at\",  null: false","    t.string   \"name\"","    t.date     \"finish_at\"","  end","","  create_table \"locations\", force: :cascade do |t|","    t.string   \"city\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  create_table \"notifications\", force: :cascade do |t|","    t.string   \"text\"","    t.boolean  \"viewed\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","    t.integer  \"user_id\"","  end","","  add_index \"notifications\", [\"user_id\"], name: \"index_notifications_on_user_id\", using: :btree","","  create_table \"registrations\", force: :cascade do |t|","    t.integer  \"job_id\"","    t.integer  \"student_id\"","    t.datetime \"time\"","    t.integer  \"active\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  add_index \"registrations\", [\"job_id\"], name: \"index_registrations_on_job_id\", using: :btree","  add_index \"registrations\", [\"student_id\"], name: \"index_registrations_on_student_id\", using: :btree","","  create_table \"students\", force: :cascade do |t|","    t.string   \"name\"","    t.string   \"surname\"","    t.integer  \"location_id\"","    t.string   \"university\"","    t.string   \"faculty\"","    t.string   \"cv\"","    t.integer  \"user_id\"","    t.datetime \"created_at\",  null: false","    t.datetime \"updated_at\",  null: false","  end","","  create_table \"users\", force: :cascade do |t|","    t.string   \"email\"","    t.integer  \"role\"","    t.integer  \"active\"","    t.datetime \"created_at\",      null: false","    t.datetime \"updated_at\",      null: false","    t.string   \"password_digest\"","    t.boolean  \"banned\"","  end","","  add_foreign_key \"companies\", \"locations\"","  add_foreign_key \"companies\", \"users\"","<<<<<<< HEAD","=======","  add_foreign_key \"notifications\", \"users\"",">>>>>>> 9625a3107cb862fd110551b442e99a4c12e7481f","  add_foreign_key \"registrations\", \"jobs\"","  add_foreign_key \"registrations\", \"students\"","end",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":105,"column":3},"action":"insert","lines":["# encoding: UTF-8","# This file is auto-generated from the current state of the database. Instead","# of editing this file, please use the migrations feature of Active Record to","# incrementally modify your database, and then regenerate this schema definition.","#","# Note that this schema.rb definition is the authoritative source for your","# database schema. If you need to create the application database on another","# system, you should be using db:schema:load, not running all the migrations","# from scratch. The latter is a flawed and unsustainable approach (the more migrations","# you'll amass, the slower it'll run and the greater likelihood for issues).","#","# It's strongly recommended that you check this file into your version control system.","","ActiveRecord::Schema.define(version: 20150517115732) do","","  # These are extensions that must be enabled in order to support this database","  enable_extension \"plpgsql\"","","  create_table \"categories\", force: :cascade do |t|","    t.string   \"name\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  create_table \"companies\", force: :cascade do |t|","    t.integer  \"user_id\"","    t.string   \"name\"","    t.integer  \"location_id\"","    t.string   \"description\"","    t.string   \"web\"","    t.string   \"phone\"","    t.datetime \"created_at\",  null: false","    t.datetime \"updated_at\",  null: false","  end","","  add_index \"companies\", [\"location_id\"], name: \"index_companies_on_location_id\", using: :btree","  add_index \"companies\", [\"user_id\"], name: \"index_companies_on_user_id\", using: :btree","","  create_table \"jobs\", force: :cascade do |t|","    t.integer  \"category_id\"","    t.integer  \"company_id\"","    t.string   \"description\"","    t.integer  \"location_id\"","    t.datetime \"duration\"","    t.datetime \"created_at\",  null: false","    t.datetime \"updated_at\",  null: false","    t.string   \"name\"","    t.date     \"finish_at\"","  end","","  create_table \"locations\", force: :cascade do |t|","    t.string   \"city\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  create_table \"notifications\", force: :cascade do |t|","    t.string   \"text\"","    t.boolean  \"viewed\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","    t.integer  \"user_id\"","  end","","  add_index \"notifications\", [\"user_id\"], name: \"index_notifications_on_user_id\", using: :btree","","  create_table \"registrations\", force: :cascade do |t|","    t.integer  \"job_id\"","    t.integer  \"student_id\"","    t.datetime \"time\"","    t.integer  \"active\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  add_index \"registrations\", [\"job_id\"], name: \"index_registrations_on_job_id\", using: :btree","  add_index \"registrations\", [\"student_id\"], name: \"index_registrations_on_student_id\", using: :btree","","  create_table \"students\", force: :cascade do |t|","    t.string   \"name\"","    t.string   \"surname\"","    t.integer  \"location_id\"","    t.string   \"university\"","    t.string   \"faculty\"","    t.string   \"cv\"","    t.integer  \"user_id\"","    t.datetime \"created_at\",  null: false","    t.datetime \"updated_at\",  null: false","  end","","  create_table \"users\", force: :cascade do |t|","    t.string   \"email\"","    t.integer  \"role\"","    t.integer  \"active\"","    t.datetime \"created_at\",      null: false","    t.datetime \"updated_at\",      null: false","    t.string   \"password_digest\"","    t.boolean  \"banned\"","  end","","  add_foreign_key \"companies\", \"locations\"","  add_foreign_key \"companies\", \"users\"","  add_foreign_key \"notifications\", \"users\"","  add_foreign_key \"registrations\", \"jobs\"","  add_foreign_key \"registrations\", \"students\"","end"]}]],"mark":0,"position":0},"ace":{"folds":[],"scrolltop":1110.636299610138,"scrollleft":0,"selection":{"start":{"row":105,"column":3},"end":{"row":105,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1431977622103,"hash":"09ae4a1e1fd9b36615b1c6c3cb19ba1464d6721d"}