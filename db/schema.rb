# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150517115732) do

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "companies", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "name"
    t.integer  "location_id"
    t.string   "description"
    t.string   "web"
    t.string   "phone"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "companies", ["location_id"], name: "index_companies_on_location_id"
  add_index "companies", ["user_id"], name: "index_companies_on_user_id"

  create_table "jobs", force: :cascade do |t|
    t.integer  "category_id"
    t.integer  "company_id"
    t.string   "description"
    t.integer  "location_id"
    t.datetime "duration"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "name"
    t.date     "finish_at"
  end

  create_table "locations", force: :cascade do |t|
    t.string   "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.string   "text"
    t.boolean  "viewed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "notifications", ["user_id"], name: "index_notifications_on_user_id"

  create_table "registrations", force: :cascade do |t|
    t.integer  "job_id"
    t.integer  "student_id"
    t.datetime "time"
    t.integer  "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "registrations", ["job_id"], name: "index_registrations_on_job_id"
  add_index "registrations", ["student_id"], name: "index_registrations_on_student_id"

  create_table "students", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.integer  "location_id"
    t.string   "university"
    t.string   "faculty"
    t.string   "cv"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.integer  "role"
    t.integer  "active"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest"
    t.boolean  "banned"
  end

end
