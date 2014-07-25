module ApplicationHelper
  def flash_class level
    case level
      when 'notice'  then "alert alert-info"
      when 'success' then "alert alert-success"
      when 'error'   then "alert alert-danger"
      when 'alert'   then "alert alert-warning"
    end
  end

  def exclude_nav?
    black_list = [new_user_registration_path,
                  edit_user_registration_path,
                  new_user_session_path]

    black_list.any? do |url|
      current_page?(url)
    end
  end

  def avatar_url user, size= 100
    gravatar_id = Digest::MD5.hexdigest(user.email.downcase)
    "http://gravatar.com/avatar/#{gravatar_id}.png?s=#{size}"
  end

  def devise_error_messages!
    return '' if resource.errors.empty?
    messages = resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
    sentence = I18n.t('errors.messages.not_saved',
               count: resource.errors.count,
               resource: resource.class.model_name.human.downcase)

    html = <<-HTML
      <div class="alert alert-warning alert-block">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <h4>#{sentence}</h4>
        #{messages}
      </div>
    HTML

    html.html_safe
  end

end
