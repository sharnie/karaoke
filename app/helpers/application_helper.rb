module ApplicationHelper
  def flash_class level
    case level
      when 'notice'  then "alert alert-info"
      when 'success' then "alert alert-success"
      when 'error'   then "alert alert-danger"
      when 'alert'   then "alert alert-warning"
    end
  end

  def karaoke?
    current_page?(root_path)
  end

  def playlist?
    white_list = [playlists_path]

    white_list.any? do |url|
      current_page?(url)
    end
  end

  def nav_link link_path
    class_name = current_page?(link_path) ? 'active ' : ''

    content_tag(:li, :class => class_name) do
      yield
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

  def current_user_content?
    user_signed_in? && current_user.id == @playlist.user_id
  end

end
